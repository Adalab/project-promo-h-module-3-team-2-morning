import React from "react";

class DesignPalette extends React.Component {
  constructor(props) {
    super(props);
    this.handlePalette = this.handlePalette.bind(this);
  }

  handlePalette(event) {
    let checked = event.target.value;
    // console.log(this.props)
    this.props.handlePalette(checked);
  }
  render() {
    console.log(this.props);
    console.log(this.props.palettesData);
    console.log(this.props.value);
    console.log(this.props.checked);






    return (

      <React.Fragment>
        <div className="color-box__palettes">
          <div className="palette-container">
            <label
              htmlFor={this.props.htmlFor}
              className="palette-container__label"
            >
              <input
                id={this.props.id}
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
                className="palette-container__input"
                // defaultChecked={this.props.checked}
                onChange={this.handlePalette}
                checked={this.props.checked}

              />
              <div className="palette">
                <div className={this.props.color1}></div>
                <div className={this.props.color2}></div>
                <div className={this.props.color3}></div>
              </div>
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesignPalette;
