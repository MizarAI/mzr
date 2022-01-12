const MZR = artifacts.require('MZR');

contract('MZR', async accounts => {
    let [owner, user1, user2] = accounts;
    let coin;
    beforeEach('deploy contract', async () => {
        coin = await MZR.new();
    });

    async function getBalance(account) {
        return await coin.balanceOf(account);
    }

    it('should initialize owner balance', async () => {
        assert.equal(await getBalance(owner), 10e27);
        assert.equal(await getBalance(user1), 0);
        assert.equal(await getBalance(user2), 0);
        assert.equal(await coin.totalSupply(), 10e27);
    });

    it('should be transferable', async () => {
        assert.equal(await getBalance(owner), 10e27);
        assert.equal(await getBalance(user1), 0);
        assert.equal(await getBalance(user2), 0);

        await coin.transfer(user1, 123, {from: owner});

        assert.equal(await getBalance(user1), 123);
        assert.equal(await getBalance(user2), 0);
        assert.equal(await coin.totalSupply(), 10e27);

        await coin.transfer(user2, 23, {from: user1});

        assert.equal(await getBalance(user1), 100);
        assert.equal(await getBalance(user2), 23);
        assert.equal(await coin.totalSupply(), 10e27);
    });

    it('should be burnable', async () => {
        assert.equal(await getBalance(owner), 10e27);
        assert.equal(await getBalance(user1), 0);

        await coin.transfer(user1, '1000000000000000000000000000', {from: owner});

        assert.equal(await getBalance(user1), 1e27);
        assert.equal(await coin.totalSupply(), 10e27);

        await coin.burn('500000000000000000000000000', {from: user1});

        assert.equal(await getBalance(user1), 5e26);
        assert.equal(await coin.totalSupply(), 9.5e27);
    });
});

async function assertRevert(promise) {
    try {
        await promise;
        throw null;
    } catch (error) {
        assert(error, 'did not revert');
        assert(
            error.message.startsWith('Returned error: VM Exception while processing transaction: revert'),
        );
    }
}