const MZR = artifacts.require('MZR');

module.exports = async function (deployer) {
  await deployer.deploy(MZR);
};
