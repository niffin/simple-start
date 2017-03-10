import { mapStateToProps } from './container';
import { initialState } from 'state/simpsonsGifs';

describe('SimpsonsGifsContainer', () => {
  describe('mapStateToProps', () => {
    it('will initially return an empty array gifUrls', () => {
      expect(mapStateToProps({ simpsonsGifs : initialState }).simpsonsGifUrls).toEqual([]);
    });
  });
});
