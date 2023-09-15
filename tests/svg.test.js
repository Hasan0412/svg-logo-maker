const { LogoText, SVG } = require("../lib/svg");
const { Circle } = require("../lib/shapes");

describe('LogoText', () => {
  it('should render logo text SVG', () => {
    const logotext = new LogoText('ABC', '#FF0000');
    const svg = logotext.render();
    expect(svg).toContain('<text');
    expect(svg).toContain('fill="#FF0000"');
    expect(svg).toContain('ABC');
  });
});

describe('SVG', () => {
  it('should render a complete SVG', () => {
    const circle = new Circle('#FF0000');
    const logotext = new LogoText('ABC', '#FF0000');
    const svgObj = new SVG(circle, logotext);
    const svg = svgObj.render();
    expect(svg).toContain('<svg');
    expect(svg).toContain('ABC');
    expect(svg).toContain('<circle');
    expect(svg).toContain('<text');
  });
});
