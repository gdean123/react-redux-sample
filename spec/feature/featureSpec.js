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

    var dealerHand = $('#root .hand:contains("Dealer\'s Hand")');
    var yourHand = $('#root .hand:contains("Your Hand")');

    expect('#root h2').toHaveText('Game started!');
    expect('#root .card').toHaveLength(4);
    expect(dealerHand.find('.card')).toHaveLength(2);
    expect(yourHand.find('.card')).toHaveLength(2);

    expect(dealerHand.find('.facedown')).toHaveLength(1);
    expect(yourHand.find('.facedown')).toHaveLength(0);
  });
});
