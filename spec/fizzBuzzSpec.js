/* Name our function */
describe("My fizzBuzz function", function (){
    describe("Checks if the number is divisible by 3, 5 or both", function(){

/* What is does */
        it("should exist", function(){
            expect(fizzBuzz) .toBeDefined();
        })

        it("should return Fizz when defined fizzBuzz(12)", function(){
            var result= fizzBuzz(12);
            expect(fizzBuzz(12)) .toBe("Fizz");
        })

        it("should return Buzz when defined fizzBuzz(10)", function(){
            var result= fizzBuzz(10);
            expect(fizzBuzz(10)) .toBe("Buzz");
        })

        it("should return FizzBuzz when defined fizzBuzz(15)", function(){
            var result= fizzBuzz(15);
            expect(fizzBuzz(15)) .toBe("FizzBuzz");
        })
    })
})