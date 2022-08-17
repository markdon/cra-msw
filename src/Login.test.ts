
describe('fetch', ()=>{
  it('can login', async ()=>{
    await expect(fetch('/login', {
      method: 'POST',
      body: new URLSearchParams('username=admin&password=admin')
    })).resolves.toBeInstanceOf(Response);
  });
});

export default undefined;