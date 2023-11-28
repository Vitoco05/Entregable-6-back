const request = require('supertest');
const app = require('../app.js');
require('../models');


let id;
let token;

beforeAll(async() => {
  const user = {
    email: "victor@gmail.com",
    password: "123456789"
  }
  const res = await request(app).post('/users/login').send(user);
  token = res.body.token;
});

test("POST /products", async() => {
  const product = {
    title: "Balon",
    description: "Balon del mundial",
    brand: "Tamanaco",
    price: 10.00
  }
  const res = await request(app).post('/products').send(product).set('Authorization', `Bearer ${token}`);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined()
  expect(res.body.title).toBe(product.title);
});


test("GET /products", async() => {
  const res = await request(app).get('/products');
  console.log(res.body)
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("PUT /products/:id", async() => {
  const product = {
    title: "Balon 2"
  }
  const res = await request(app).put(`/products/${id}`).send(product).set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body.title).toBe(product.title);
});

test("DELETE /products/:id", async() => {
  const res = await request(app).delete(`/products/${id}`).set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(204);
});
