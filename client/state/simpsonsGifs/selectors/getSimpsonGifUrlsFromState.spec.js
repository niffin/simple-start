import getSimpsonGifUrlsFromState from 'state/simpsonsGifs/selectors/getSimpsonGifUrlsFromState';

describe('getSimpsonGifUrlsFromState', function () {
  it('will get a list of urls from the state', function () {
    const fakeState = {
      simpsonsGifs : {
        gifUrls : ['foo', 'bar']
      }
    };

    expect(getSimpsonGifUrlsFromState(fakeState)).toEqual(['foo', 'bar']);
  });
});
