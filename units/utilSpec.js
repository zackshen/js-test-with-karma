describe('utils test', function() {
    it('sum', function() {
        expect(sum(1, 2)).toEqual(3);
    });
});

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("Test Load JSON Fixture: Sample_map.json", function() {
    var map = null;

    beforeEach(function() {
        map = getJSONFixture('sample_map.json');
    });

    it("map is not null", function() {
        expect(map).not.toBe(null);
    });

    it("sample_map.json nodes's length is 20", function() {
        expect(map['nodes'].length).toEqual(20);
    });

    it("sample_map.json links's length is 35", function() {
        expect(map['links'].length).toEqual(35);
    });

});


describe("Test Load Html Fixture: Sample_component.html", function() {
    var $fixtureHtml = null;
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'fixtures/html';
        loadFixtures('sample_component.html');
        $fixtureHtml = $('#datapath_fixture');
    });

    it("component count is 4", function() {
        expect(getComponentCount($fixtureHtml)).toEqual(4);
    });

    it("set component text", function() {
        var compOne = $fixtureHtml.find('.component.one');
        var text = '123456';
        addSomeTestIntoComponent(compOne, "aaa");
        expect(compOne.text()).toBe(text);
    });

    it("set component text with exception", function() {
        var compOne = $('aaaa');
        var text = '123456';
        expect(function() {
            addSomeTestIntoComponent(compOne, text);
        }).toThrow(new Error("component is null"));
    });
});
