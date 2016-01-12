import '../support/specHelper';

describe('Starting a game', function() {

    beforeEach(function() {
        require('jasmine_dom_matchers');
        $('body').append('<div id="root"></div>');
        require('./../../src/index');
    });

    afterEach(function() {
        $('body').find('#root').remove();
    });

    it('renders a dealer hand and a player hand', function() {
        $('button:contains("Start Game")').click();

        expect('#root h2').toHaveText('Game started!');
        expect('#root .card').toHaveLength(4);
        expect('#root .dealer-hand .card').toHaveLength(2);
        expect('#root .your-hand .card').toHaveLength(2);
        expect('#root .dealer-hand .card.facedown').toHaveLength(1);
    });
})