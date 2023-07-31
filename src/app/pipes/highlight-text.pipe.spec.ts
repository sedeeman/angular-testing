import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
    const pipe = new HighlightTextPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('wrap string in a <span>', () => {
        expect(pipe.transform('foobar', 'foo')).toBe(
            '<span class="highlight-text">foo</span>bar'
        );
    });

    it('wrap uppercase string in a <span>', () => {
        expect(pipe.transform('FOOBAR', 'foo')).toBe(
            '<span class="highlight-text">FOO</span>BAR'
        );
    });

    it('wrap string with space in a <span>', () => {
        expect(pipe.transform('Foo Bar', 'foo')).toBe(
            '<span class="highlight-text">Foo</span> Bar'
        );
    });

    it('wrap  multiple values in a <span>', () => {
        expect(pipe.transform('Foo Foo', 'foo')).toBe(
            '<span class="highlight-text">Foo</span> <span class="highlight-text">Foo</span>'
        );
    });
});
