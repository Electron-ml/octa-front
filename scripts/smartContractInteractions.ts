import exp from "constants";
import { BigNumberish } from "ethers";
import path from "path";

const { ethers } = require("ethers");
const { StrategyABI, strategyBytecode } = require("./StrategyAbi");

// const dotenv = require("dotenv");
// dotenv.config({ path: path.join(__dirname, "../../.env") });

const deployStrategy = async (signer: any, verifierAddress: string) => {
  // const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // const privateKey = process.env.PRIVATE_KEY;
  // const wallet = new ethers.Wallet(privateKey, provider);

  // Create a ContractFactory
  const factory = new ethers.ContractFactory(
    StrategyABI,
    strategyBytecode,
    signer
  );

  const WETH_ADDR = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
  const USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

  const strategyName = "AIStrategy";
  const symbol = "AIS";
  const positionManager = "0x1238536071E1c677A632429e3655c799b22cDA52";
  const swapRouter = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E";

  const scalers = [
    "7455504813211",
    "2953758299944270168064",
    "1838876263346026577920",
  ];
  const minAdditions = ["1729926753534472704", "262951735771738", "0"];

  // Deploy the contract
  const contract = await factory.deploy(
    WETH_ADDR,
    strategyName,
    symbol,
    positionManager,
    swapRouter,
    verifierAddress, // "0xF26585263D5C18750870314e7Cf16fE2ED3c0A90",
    scalers,
    minAdditions
  );

  // Wait for the contract to be mined
  let txRes = await contract.deployTransaction.wait();

  console.log("Strategy deployed to:", txRes.contractAddress);

  return txRes.contractAddress;
};

async function approveTokenSpend(
  signer: any,
  strategyAddress: string,
  amount: BigNumberish
) {
  // const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // const privateKey = process.env.PRIVATE_KEY;
  // const wallet = new ethers.Wallet(privateKey, provider);

  const WETH_ADDR = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";

  const abi = [
    "function approve(address spender, uint256 amount) public returns (bool)",
  ];

  const contract = new ethers.Contract(WETH_ADDR, abi, signer);

  try {
    const tx = await contract.approve(strategyAddress, amount);
    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    return receipt.transactionHash;
  } catch (error) {
    console.error("Error approving token spend:", error);
  }
}

const depositToStrategy = async (
  signer: any,
  depositAmount: BigNumberish,
  strategyAddress: string
) => {
  // const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // const privateKey = process.env.PRIVATE_KEY;
  // const wallet = new ethers.Wallet(privateKey, provider);

  const strategyContract = new ethers.Contract(
    strategyAddress, // "0x56Bc15B5648db1CC68dDac667C50Eba24a1e6Ee6",
    StrategyABI,
    signer
  );

  // const WETH_ADDR = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
  // const USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

  // ! TOKENS SHOULD ALREADY BE APPROVED !!!!!!!!

  try {
    let recipient = signer._address;
    const tx = await strategyContract.deposit(depositAmount, recipient, {
      gasLimit: 3000000,
    });

    const receipt = await tx.wait();

    console.log("Transaction receipt:", receipt.transactionHash);
    return receipt.transactionHash;
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

const updateLiqudity = async (signer: any, strategyAddress: string, instances: string[], proof:string) => {
  // Create a contract instance
  const strategyContract = new ethers.Contract(
    strategyAddress, 
    // "0x56Bc15B5648db1CC68dDac667C50Eba24a1e6Ee6",
    StrategyABI,
    signer
  );

  const WETH_ADDR = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
  const USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

  try {
    const tokenId = 0;
    const poolInfo = {
      token0: USDC,
      token1: WETH_ADDR,
      fee: 3000,
    };
    // const proof =
    //   "0x0cdc983edb33db0468fe19d4c7abd87cf9392597c476f3c1fecb5124bb35c6a91b1a9e5ed9c6522aaa87ea59079e79f33cdbb51b77dd7c474d9be79c588dd9fa23bb813adefc6544ed0e4b59c66b86c54be6c2d609eac3446d054ebff539c0f5032282bba738116fed9d8944e070a507fe59a64cfbef13688c47e3ab8abbb15203863f600dfc79d237b39b44bf78626dd32c9255af31c746fb43dfa87903093707b629bf5b15d9ee810019f9e1682c43341fec2a328e0efb10814ff22c5c6a652f4f3ed425ee5032f2a415054bf98d2a83228882f3ae0b7f502f221183df855b04cf7f1ec57feb1e964196ab44dffa6f8c493514c8b6f93fb1769ecccbc8305207c3e85d98d3ff282c265ef38ae818c4ee40163a6d7acb96419294c39e8db2f227118287dba377a5184878e37a123e908190a5cbf243fbf541db9be90c6be9df01e9caeb670e69760ebcfcdeec2519aa76d79ec5588c38a4bff343f2273b45a51b4801d5b6e7ad629951fea4e5b05e440d81bc1c454d307a003b502271a51a7001ad953f3905b7d45b4c30ac2caf7256fce877147708ee8e44b27b30a6e6d58c27ce9b9b93c171ef777b624dc9adc00cb402ef6b8afc73bfbd7700f7b4883a2e27df95c1c68314b97729a335f745e6b2dd294d84b2bd04abb8d0b1be30e6279313dad2c3aa27037503e70aa9a5c395068979c63017e7a0e0097c53366c7042d81db3f085dc11c99d44f41db163e0a8bc5beaed10121ddb038ac95143328aad7302e66f9c102a7324b9a7889d5e9852a896645c6af6aa241289d9629721f3008609fc930b97343a9d60509c14fa55dead6ede0630fd1dc1a2388e65e8835c71e727ed83b94ab049598a33ecf728f6dd08baa26e83cf5630b7e653a8cb74c7cb141d6dadf1b9dc4f15683dba79c81d6fce2f71edbd12afb556ea52fa4777834ebc2f9e85def8cf48c2f8f8a9a59ffc048268f427ef1cb86be6a6a2f7c5cd9a59151b9c649e96f7c9c8f24ad7d6c3ade54d44dc3444bb02ebf08f0b74b4e5f425d91dfaf1cd40975c307319e92f8755a9b82a7b1968b1bc034b8316fd74d529b00b1fd493df1f8adb595178531b08391517399c77bbadd15cc3b09661e4497f998b1b5dd4c791a4d5e9af7cdf1836d797f183b8a3a4dc6e2d9ad8ddcc6417b915232b7a9b8192771acceb7ee5eb31d5cccdf7fcb2405ee4507cc1c1f5afbc6ebc521ee4072768cee380f74f43721d1aa5c59ce57890d76bea114e7c8bd2c7e7643f0220a4a1d29b8d77e87eea535371222bd0ea7ac2d56d17ee3d0424d78f5d6cae0c960e30469179666c648d73c9180b119f0b8c69fac84bb13a4cdb422545b6070c6859900a66da006d1369a17a9db77075a72d57773bf0d0469950b4a0447b113055ac2c3c4016bbd8e44a52516ac739612c8b1d22c23b98d7847662e9a0d07a0b2c73de6b22733468baeb66c09b6732d7281f2cc735f9e091288aa19a5452320f15b0ea68db0661b4ef230e1bff8ca1450e3adbf4090ee0bfd9a761127d4e3902aa3991ffcba97b5cfacb86fb150d9fdbb8c776d9ca3e9081de09167062cc1d0dd2407722c684dd443006f1f1f6a6c8beb925b4b58370eb62dbceb276809a0919f6b19c27f83d0884eade5f12ea160af3ad0f5230b229dbad476f03216742352a4073a41c511e2af62148086f7a23d6c574bc7db93f99532af16876af63b1ae264d6ba37c9857e3a4bcab5d052eb6604b81b3479dded2d1d626e54b7afb0e7b0601a139f3c645b9194963eb44143d3aa65be9922d57e0e01092a6f4e1151b821b82adcad8dc409e4406f32b3afda26099587d6a4ea7d535535e8e768931f3941db795ea80e59ea82e655dcd0e4356fbfa113265070aacdbf904791e034f1c9b12d3288a920189f2107658b4d344051f64389ffeee4f61d42f3dbcd974e8646728918352c88305d2907047f1f1b2fd56dd64782ed9c7fda90a16a763cd44b75c0f09480aca8e9be42762ad2efe524a8f5b881c6cd4107a29ddccac53378164ba19e3de817364d10e4998c19308dc393a8d1050c748be6f246a6a18aac397647a222af99b6a685cf0881bd05180772c6acb129d42fde52a7c7565501d5be171a61faae6d376061a704385ad63cf29310adce28d1086a10efc35075fb8751b1c352113fa64aa6887837758f828d3bab1f33d6d8d7f87748c0a786bd18f0576942c0946df4b32ffd4c75db44e2f5de2584b2d90676106ed0f57d3d884c9569bd55c0ad5b24dc09624b5499d7fc0c4f7579b36736cd51340345da6bb94f08af7bb8404877acfff0644ada362075722aa38949c02d4cb9a72c406b6a27a3be94ce6ea1af3242ed62b34aa0ac42bb5d025af5b5e842d9a758b94484a2f564abd9229981e3284009b91d3eef443ba041e06c944e0a20bec68a0d992bd16871bba449a1315b14c92b1e3b2c6fc5307a154019e50372b6a2e328db737d4089a0da43dc0a0017a2b445bb18b223e36687c12f26183f747b402eb1ac0ffb676aa96e3f4eb4617953079933d9cc1b58854bc8db5eeb477763a65a53b0ef1a4b7845b8fd9614820ac102d30150cb33168309ace8ae6ed7c41c19041950b744d2ecd71f11ae8031eabcab14f807f878fd12e848c3081bedad09306ee8f95b34a378dce614fbfb818813357ade9d982b06945360d01ac22bbb8a0f8d667f662758964ec3e554e801a874be7a548e068738957d8483d2ab40bb887625ef1a344db994460e9260def29536679b967aac71ffac0a1be7340da9c24492550cf2290fd107a553cff96e32d7484f99e1c651e817c3e6f8ecac8f5c1e2d17254c283d8bd919503c1721b8c0908c15cdd0cf5807e71bd22359c092e3d088ef3b50ba00708fd32f861b9c4fa0744b2cf2762c5eadafd948b1a377d322a4c52028046b8677f8b3ee30114623d2048099f4315a77065189ba209742327877c783bdc9df3c1c37523cf534b7dd3143fb5ecc27f0d229b1c2baf16ba3c70e282d26c765d1f567f202b7d3996481a1cd40642ad6f08bec1c8daa92833fa8983e5503ce1bd33d5d4d267e62632bd7b0270fca7dfdbb30ebbcd4ab0574009fe585a06a450993f5bc3e534d43ce35ae40afc0e7613c2b696d315e79094834a8718cda20ee27a9167e5e6b15291ae642b1e11bcdeb5e16bc0e2ad9fe4711d6a53b6bcc0eec8ba1ebc0939a29bad43fb00081fbf51e71490e59f7a6855593aea930089c3b9d92509b0107bbeb36591170829a728595e530b278754fcefbdfcc0aaf2dbd0f632326f51342316eba5c51d102d61af6b0e1d45d4269f498ac04990bda0413632bde86997d1c05db0d3ddc69d00000000000000000000000000000000000000000000000000000000000000000233722337dfce4a7b85e0ed65d4f1e721b940327f36b05cbf13b64a960d317002234a629f46c870d94fbf1e3de8161412da297c74540effd1481689a20c06a90e8c7ee4c273f74dd157f9ef97d01e73ce0b9bc6918b45bf153eb8e2d29a429805a899b70bc61a9bb23bc4e9f3d75fcd1b644773ae6c371c751bae883788b94f13ffdefb2a8a598f37ce4163e2fda761fd1489e75be945f1b49541d31b386fc911222e11c0f26e4ec4d4f0d137e909f12af9ffa5ed9cadad7c9ee4304a891be2039a561e3bf47f8c676569495fffd5af124237220a979bf74e78461f351371732e644ba72193e38c613e7a98cdc44457483f0811e5df3f608de4abd9c2ba6a4e278fd490afc1cdb02cbb662c4c72b80be6a6e13ed10dd81a2ea07998f73b6ebd00009471f70eaea3d2321c7074dc3aecc0613c850aaab88cb224472b0aa0b8c11c038b23b296499f25a25107d943b8be6eb5ca2aea92e1564c653bfef454abb0079d38a064fc1dd15f429cf736bf3dafb5fd648318a587b4e9dcba89e81cd3ec09c12700d5024ba4c5d9d5c8a07b020f3ba6a2e63b45c6495ed48a91b1a4134e19312e0779a1a0d10c6866b3379b8c824633131074f5a15ba2f13852c778894f09b73f2b51fd8f552bd6811d69d3d8d61c086f19d82e1b58fea9b6ac18ab53c706cc5e0ec023351123e9028bd0cc7e4334da2e2567560fcd108dbb6c711656472ac7cab4f2d36e26ee82865143296a471c4749a259147f87b85d7063a087cf962cf79716fa39855538ba610624dc16811525a2559f62c0f0052e855eb889ddcf16e47f74e31c8aedd3c0ea7c52bb6ded742938aa01e79c7a5a1ac225338b8c221dfb3f39bc6db18b18d39e2bc5c57b3cec9094166dba6865e6306d3329f8f59107b0b92f7d17a1e5c900f0137ab0afeb77ab901d8974767cc0345515965f44b11f36885330cda1c739a9b2f78650d7708a12b92fb76ec69d4e269dcda40ec0f822fa57cd09c80aa12e6b3a787b8d0b4c1415ffe5add5cd3ec39f8637610341b723f0cc876b1b446a64b9fd99bf74b6f257dac3d61defa5d88a9ca4739fe31a140619608e3fb706d8b598652162ef294866e82c9ba1beb04aab5a6f8a57b567aa0b2891797d3d0a191b200110cb25efe626927a41f5664d8a055046db52aaf2ab2c67930aef0f6fed997a8e1b4e397998b833fe808f93360100cf71788ddd48ae3053751e380673bc87d92b6492a80b4227ede0feeaf895a0544031b2d896a35c041aef61f4ac61275c9ca819f4bb0e9ef376cd90fd4ab13fb708ee0891fe05e20d777f935307682f43808142a61036badffff53ecdc98fab6a3525bb8b8cb5da27992ba982d238a7d1545fa085a94b4ac66d725b12df90f8ef3d27c55bcdb19206c1fd26b13168e1ef7c8224a72c3670aae118d39623e7d7c6db1a0d4e78b3740235020ce9732b1f93be0cadd962a34dd9938a2ecb483091d81beb549556111924683fa122cd8b7a474785173fb53bcaa343799c0666e097692fc677c41ec3cb24ea2b59ac5f69fa43a9995a42d858c48c22932e99da08b90b6bd1103250eb311b585ae34140df55d4db91f3f04d17b6e1f7d587ca73c843a4947e5aa2ab73fa09d0acaa17001ae35aff4a2a4b5b99f6baa5b7516883f07d5ae25b847a16b05122a49de317dfc3b4ddcd1c5156fd2f910af766b14673f1481152c06637f766881b5914d813a2a74fb61f63b96ebedf143852a9c6801ae8d31349c040bd78a789";
    // const instances = [
    //   "0x000000000000000000000000000000000000000000000000000000000000086e",
    //   "0x00000000000000000000000000000000000000000000000000000000000002c7",
    //   "0x0000000000000000000000000000000000000000000000000000000000000714",
    // ];

    console.log("Params", tokenId, poolInfo, proof, instances);

    const tx = await strategyContract.updateLiquidity(
      tokenId,
      poolInfo,
      proof,
      instances,
      {
        gasLimit: 3000000,
      }
    );

    const receipt = await tx.wait();

    console.log("Transaction receipt:", receipt.transactionHash);
    return receipt.transactionHash;
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

// const verifierAddress = "0xF598d2390B62A0485c6E00aa97EbE9B5B0fB30Aa";
// deployStrategy(verifierAddress).catch(console.error);

// const strategyAddress = "0x9e056f6473d4Ac9073E469943500E6Be68758aFD";
// const depositAmount = ethers.utils.parseUnits("0.0001", 18);
// depositToStrategy(strategyAddress, depositAmount).catch(console.error);

export { deployStrategy, approveTokenSpend, depositToStrategy, updateLiqudity };
