async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const Token = await ethers.getContractFactory("hjcontract");
    // 메인 컨트렉트의 이름 기억....하고..... 이렇게 하기....
    // 메인 컨트렉트의 contract XXX의 XXX를 이 const로 설정해야 된다. 모든걸 XXX로 대입하기!!!!!
    const contract = await Token.deploy("1000000000000000")
    // 여기 _name, _symbol은 main contract의 constructor에 parameter로 들어가서 기억하기... // _name, _symbol을 verify할 때 써야한다...
    // .deploy()안에 들어가는 것은... remix에서 해당 sol 파일을 배포할 때 필요한 것이다.
    // 배포할 컨트렉트 constructor에 들어가는 것들!!!
    console.log("hjcontract address:", contract.address);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });