
export{}


test ("Sum",()=>{

	function sum (a:number,b:number){
		return a+b
	}

	expect(sum(2,2)).toBe(4)
})