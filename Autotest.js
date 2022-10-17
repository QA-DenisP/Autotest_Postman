pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(60);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Status code is 500", function () {
    pm.response.to.have.status(500);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Endor");
});

pm.test("Successful GET request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});

pm.test("Response time is less than 150ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(150);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

var schema = {
    "items": {
        "type": "boolean"
    }
};

var data1 = [true, false];
var data2 = [false, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.false;
});