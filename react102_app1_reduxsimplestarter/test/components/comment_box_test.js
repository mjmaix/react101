import { renderComponent, expect } from '../test_helper.js';
import Component from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Component);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box'); 
  });

  it('has the correct class', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has the correct class', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });
    
    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment'); 
    });
  
    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
  
});
