const { app } = require("../server");
const supertest = require("supertest");

const request = supertest(app);

test("fetch users", (done) => {

    const query = `query{
        users(first:5){
          edges{
            node{
               name
               title
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }`;
    request
        .post("/graphql")
        .send({ query: query })
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.data.users.edges.length).toEqual(5);
            done();
        });
});

test("incorrect user query", async () => {
    const response = await request
        .post("/graphql")
        .send({
            query: "{ users{ id, name} }",
        })
        .set("Accept", "application/json");

    expect(response.status).toBe(400);
});