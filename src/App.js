import React from 'react';
import Select from 'react-select'

import './App.css';
import './slider.css';

export default class App extends React.Component {
    options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            classname: 'coconut'
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyPress(e) {
        console.log(e.charCode);
        if (e.charCode == 13) {
            alert('Enter... (KeyPress, use charCode)');
        }
        if (e.keyCode == 13) {
            alert('Enter... (KeyDown, use keyCode)');
        }
    }

    handleClick() {
        console.log('this is:', this);
    }


    handleChange(event) {
        console.log(event.target.value);
        this.setState({classname: event.target.value});
    }


    render() {


        return (
            <div className="App">


                Font:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="baloo-paaji-two">baloo-paaji-two</option>
                    <option value="VTPortableRemington">VTPortableRemington</option>
                    <option value="mukta-mahee">Mukta Mahee</option>
                    <option value="roboto">Roboto</option>
                    <option value="manrope">Manrope</option>
                    <option value="opensans">Open Sans</option>
                    <option value="baloobhainatwo">Baloo Bhaina 2</option>
                    <option value="lato">Lato</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="notosansjp">Noto Sans JP</option>
                    <option value="roboto-condensed">Roboto Condensed</option>
                    <option value="baloo-tamma-two">Baloo Tamma 2</option>
                    <option value="source-sans-pro">Source Sans Pro</option>
                    <option value="oswald">Oswald</option>
                    <option value="roboto-mono">Roboto Mono</option>
                    <option value="raleway">Raleway</option>
                    <option value="poppins">Poppins</option>
                    <option value="noto-sans">Noto Sans</option>
                    <option value="roboto-slab">Roboto Slab</option>
                </select>


                <option value="">

                </option>
                <Select options={this.options}/>

                <div className={"content"}>
                    <div className={this.state.classname}>

                        <h2>Lorem Ipsum</h2>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                        <h2>What is Lorem Ipsum?</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        <h2>Why do we use it?</h2>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                        <h2>Where does it come from?</h2>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                        <h2>Where can I get some?</h2>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </div>
                    <h2>
                        Punjabi Lorem Ipsum</h2>
                    <div className="punjabi">
                        ਕੋਰੋਨਾ ਵਾਇਰਸ ਦੇ ਆਰਥਿਕਤਾ 'ਤੇ ਪੈਣ ਵਾਲੇ ਨਾਂਹ-ਪੱਖੀ ਪ੍ਰਭਾਵਾਂ ਤਹਿਤ ਸਰਕਾਰ ਨੇ ਕੇਂਦਰੀ ਮੁਲਾਜ਼ਮਾਂ ਅਤੇ ਪੈਨਸ਼ਨਰਾਂ ਨੂੰ ਵੱਡਾ ਝਟਕਾ ਦਿੰਦਿਆਂ ਉਨ੍ਹਾਂ ਨੂੰ ਦਿੱਤੇ ਜਾਣ ਵਾਲੇ ਵਾਧੂ ਮਹਿੰਗਾਈ ਭੱਤੇ 'ਤੇ ਰੋਕ ਲਾ ਦਿੱਤੀ ਹੈ। ਕੇਂਦਰ ਸਰਕਾਰ ਨੇ ਡੇਢ ਨਾਲ ਭਾਵ 1 ਜਨਵਰੀ, 2020 ਤੋਂ 1 ਜੁਲਾਈ, 2021 ਦਰਮਿਆਨ ਦੇ ਸਮੇਂ ਲਈ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦੀ ਦਰ 'ਚ ਕੋਈ ਤਬਦੀਲੀ ਨਾ ਕਰਨ ਦਾ ਫ਼ੈਸਲਾ ਕੀਤਾ ਹੈ। ਹਾਲਾਂਕਿ ਵਿੱਤ ਮੰਤਰਾਲੇ ਨੇ ਇਹ ਸਪੱਸ਼ਟ ਕੀਤਾ ਹੈ ਕਿ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦਾ ਭੁਗਤਾਨ ਮੌਜੂਦਾ 17 ਫ਼ੀਸਦੀ ਦੀ ਦਰ ਨਾਲ ਕੀਤਾ ਜਾਂਦਾ ਰਹੇਗਾ। ਵਿੱਤ ਮੰਤਰਾਲੇ ਵਲੋਂ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਮੁਤਾਬਿਕ ਕੇਂਦਰ ਸਰਕਾਰ ਦੇ ਮੁਲਾਜ਼ਮਾਂ ਅਤੇ ਪੈਨਸ਼ਨ ਧਾਰਕਾਂ ਨੂੰ 1 ਜਨਵਰੀ, 2020 ਤੋਂ ਦਿੱਤੇ ਜਾਣ ਵਾਲੇ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦੀ ਵਾਧੂ ਕਿਸ਼ਤ ਨਹੀਂ ਦਿੱਤੀ ਗਈ। ਜ਼ਿਕਰਯੋਗ ਹੈ ਕਿ ਕੇਂਦਰ ਸਰਕਾਰ ਵਲੋਂ ਹਰ 6 ਮਹੀਨੇ ਦੇ ਵਕਫ਼ੇ ਦਰਮਿਆਨ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦੀ ਦਰ 'ਚ ਤਬਦੀਲੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਤਬਦੀਲੀ ਤੋਂ ਬਾਅਦ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦਾ ਭੁਗਤਾਨ ਹਰ ਸਾਲ 1
                        ਜਨਵਰੀ ਅਤੇ 1 ਜੁਲਾਈ ਨੂੰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਮੰਤਰਾਲੇ ਮੁਤਾਬਿਕ ਕੇਂਦਰੀ ਮੁਲਾਜ਼ਮਾਂ ਅਤੇ ਪੈਨਸ਼ਨ ਧਾਰਕਾਂ ਨੂੰ 1 ਜੁਲਾਈ, 2020 ਅਤੇ 1 ਜਨਵਰੀ, 2021 ਤੋਂ ਬਕਾਇਆ ਹੋਣ ਵਾਲੇ ਮਹਿੰਗਾਈ ਭੱਤੇ ਦੀ ਵਾਧੂ ਕਿਸ਼ਤ ਦਾ ਭੁਗਤਾਨ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ। ਵਿੱਤ ਮੰਤਰਾਲੇ ਨੇ ਇਹ ਵੀ ਕਿਹਾ ਕਿ 1 ਜਨਵਰੀ, 2020 ਤੋਂ 30 ਜੂਨ 2021 ਦੀ ਮਿਆਦ ਦਾ ਕੋਈ ਵੀ ਬਕਾਇਆ ਅਦਾ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ। ਕੇਂਦਰ ਸਰਕਾਰ ਦੇ ਇਸ ਫ਼ੈਸਲੇ ਕਾਰਨ 1.13 ਕਰੋੜ ਮੁਲਾਜ਼ਮ ਅਤੇ ਪੈਨਸ਼ਨਰ ਪ੍ਰਭਾਵਿਤ ਹੋਣਗੇ। ਇਸ ਮਹਿੰਗਾਈ ਭੱਤੇ ਕਾਰਨ ਕੇਂਦਰ ਸਰਕਾਰ ਨੂੰ 2020-21 ਅਤੇ 2021-22 ਦਰਮਿਆਨ ਤਕਰੀਬਨ 37,530 ਕਰੋੜ ਰੁਪਏ ਦੀ ਬੱਚਤ ਹੋਵੇਗੀ। ਕੇਂਦਰ ਸਰਕਾਰ ਦੇ ਫ਼ੈਸਲੇ ਤੋਂ ਬਾਅਦ ਰਾਜ ਸਰਕਾਰ ਵਲੋਂ ਵੀ ਮਹਿੰਗਾਈ ਭੱਤੇ ਰੋਕਣ ਦੀ ਸੰਭਾਵਨਾ ਹੈ। ਜੇਕਰ ਰਾਜ ਸਰਕਾਰਾਂ ਵੀ ਅਜਿਹਾ ਕਦਮ ਚੁੱਕਦੀਆਂ ਹਨ ਤਾਂ ਸਰਕਾਰ ਤਕਰੀਬਨ 82.566 ਕਰੋੜ ਰੁਪਏ ਬਚਾ ਸਕਦੀ ਹੈ।
                    </div>
                </div>

                <div className="container" onKeyDownCapture={this.handleKeyPress} onClick={this.handleClick}>
                    <div className="verticalslider">
                        <div>
                            <div className="sideslider"></div>
                        </div>
                        <div>
                            <div className="sideslider"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Pending</h2>
                    Type Keys Filled

                    ATypewriterForMe
                    uncletypewriter
                    1942 report
                    butterbrotpapier

                    WBXflack

                    Typewriterhand
                    The X-Files
                    WriterLine

                    StitchyTimes
                    LightFingers
                    Type Keys
                    Type right!
                    TELETYPE 1945-1985
                    SENTA Schreibmaschine

                    Old newspaper font

                    COURIERTXT
                    BaltimoreTypewriterBold Beveled
                    VTPortableRemingto
                    HammerKeys
                </div>
            </div>
        );
    }
}
