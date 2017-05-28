describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

Test.assertEquals(codewarsTshirts(6,[["Red","Black"],["Red","Black"]]),true)

Test.assertEquals(codewarsTshirts(6,[["Red","Black"],["Red","Black"],["Red","Black"]]),false)

Test.assertEquals(codewarsTshirts(6,[["White","Purple"],["Purple","Blue"],["Blue","Orange"],["Orange","Red"],["Red","Black"],["Black","White"]]),true)

Test.assertEquals(codewarsTshirts(24,[]),true)

Test.assertEquals(codewarsTshirts(6,[["Red","Black"],["Red","Black"],["Blue","Black"]]),true)

Test.assertEquals(codewarsTshirts(6,[["Blue","Purple"]]),true)

Test.assertEquals(codewarsTshirts(18,[["Black","Blue"],["Purple","Blue"],["Blue","White"],["White","Orange"],["White","Blue"],["Purple","White"],["White","Purple"],["White","Red"],["Blue","Purple"],["Orange","White"],["Black","Blue"],["Purple","Red"],["Blue","Red"],["Blue","White"],["Purple","White"],["Purple","Blue"],["Orange","Red"]]),true)

Test.assertEquals(codewarsTshirts( 6, [ ["Purple","Black"], ["Black","Red"], ["Red","Purple"], ["Red","Purple"], ["White","Orange"] ] ),false)

})})