function outPutFizzBuzz(){

	const FizzBuzz_maxCount = 100;
	const outPut_Fizz = "Fizz";
	const outPut_Buzz = "Buzz";


	for(i = 1; i < FizzBuzz_maxCount; i++){

		if(i%3== 0 && i%5== 0){
			alert(outPut_Fizz + outPut_Buzz)
		}else if(i%3== 0){
			alert(outPut_Fizz);
		}else if(i%5== 0){
			alert(outPut_Buzz);
		}else{
			alert(i);
		}
	}
}