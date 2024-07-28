
  describe("comments for tests", function() {

  //   before(() =>{
  //     let divComment = document.getElementById('mochaComments')
  //     divComment.innerHTML=`<p> Hey this is comment added before suit started!</p>`
  // });
    
    
  //   after(() =>{
  //     let divComment = document.getElementById('mochaComments')
  //     divComment.innerHTML+=`<p> Hey this is comment added after all suit ended!</p>`
  //     })

  //   beforeEach(() =>{
  //     let divComment = document.getElementById('mochaComments')
  //     divComment.innerHTML+=`<p> new Test started</p>`
  //     }
  //   )    
  //   afterEach(() =>{
  //     let divComment = document.getElementById('mochaComment  s')
  //     divComment.innerHTML+=`<p> new Test ended</p>`

  //   }); 

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });

  
    it("3 raised to 4 is 81", function() {
      assert.equal(pow(3,4), 81);
    });

    it("for negative n the result is NaN", function() {
      assert.isNaN(pow(2, -1));
    });
  
    it("for non-integer n the result is NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });
    
    })



// describe("pow", function() {




// });


// describe("test", function() {

//   before(() => alert("Testing started – before all tests"));
//   after(() => alert("Testing finished – after all tests"));

//   beforeEach(() => alert("Before a test – enter a test"));
//   afterEach(() => alert("After a test – exit a test"));

//   it('test 1', () => alert(1));
//   it('test 2', () => alert(2));

// });




