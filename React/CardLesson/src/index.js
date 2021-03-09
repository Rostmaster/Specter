const mountains = [
    { id: 1, name: "Mount Hermon", height: 2.236, area: "Golan Heights", src: "./img/1920px-Hermonsnow.jpg" },
    { id: 2, name: "Mount Meron", height: 1.208, area: "Upper Galilee", src: "../img/Northern_slope_of_Mount_Meron.jpg" },
    { id: 3, name: "Mount Ramon", height: 1.035, area: "Negev", src: "../img/Ramon2004b.jpg" },
    { id: 4, name: "Mount of Olives", height: .835, area: "East Jerusalem", src: "../img/2013-Aerial-Mount_of_Olives.jpg" },
    { id: 5, name: "Mount Tabor", height: 588, area: "Lower Galilee", src: "../img/1920px-Tabor.jpg" },
    { id: 6, name: "Mount Carmel", height: 546, area: "Haifa", src: "../img/Caiobadner_-_mount_carmel.jpeg" }
]

const mountains_rus = [
    { id: 1, name: "Гора Хермон", height: 2.236, area: "Голланы", src: "../img/1920px-Hermonsnow.jpg" },
    { id: 2, name: "Гора Мерон", height: 1.208, area: "Верхняя Галлилея", src: "../img/Northern_slope_of_Mount_Meron.jpg" },
    { id: 3, name: "Гора Рамон", height: 1.035, area: "Негев", src: "../img/Ramon2004b.jpg" },
    { id: 4, name: "Гора Оливковая", height: .835, area: "Восточный Иерусалим", src: "../img/2013-Aerial-Mount_of_Olives.jpg" },
    { id: 5, name: "Гора Тавор", height: 588, area: "Нижняя Галлилея", src: "../img/1920px-Tabor.jpg" },
    { id: 6, name: "Гора Кармэль", height: 546, area: "Хайфа", src: "../img/Caiobadner_-_mount_carmel.jpeg" }
]

const mountains_heb = [
    { id: 1, name: "הַר חֶרְמוֹן", height: 2.236, area: "רמת הגולן", src: "../img/1920px-Hermonsnow.jpg" },
    { id: 2, name: "הַר מֵירוֹן", height: 1.208, area: "הגליל העליון", src: "../img/Northern_slope_of_Mount_Meron.jpg" },
    { id: 3, name: "הר רמון", height: 1.035, area: "הַנֶּגֶב‎", src: "../img/Ramon2004b.jpg" },
    { id: 4, name: "הַר הַזֵּיתִים", height: .835, area: "הָעִיר הָעַתִּיקָה‎", src: "../img/2013-Aerial-Mount_of_Olives.jpg" },
    { id: 5, name: "הר תבור", height: 588, area: "הגליל התחתון‎", src: "../img/1920px-Tabor.jpg" },
    { id: 6, name: "הַר הַכַּרְמֶל‎", height: 546, area: "חֵיפָה", src: "../img/Caiobadner_-_mount_carmel.jpeg" }
]

const LangInterface = {
    english: {
        height:"Height",
        region:"Region"
    },
    hebrew:{
        height:"Gova",
        region:"Ezor"
    },
    russian:{
        height:"BblcoTa",
        region:"MecTo"
    }
}

const LangMap = {
    eng:{language: LangInterface.english, data:mountains},
    heb:{language: LangInterface.hebrew,  data:mountains_heb},
    rus:{language: LangInterface.russian, data:mountains_rus}
}

const styles ={
    root:{
        margin: "5px",
        fontFamily: "Arial",
        display:"flex",
        flexWrap:"wrap"
    },
    h1:{
        color: "#a87532"
    },
    card:{
        display: "flex-inline",
        border:"1px solid #a87532",
        borderRadius: "10px",
        marginBottom: "15px",
        width:"300px"
    },
    button:{
        margin: "5px"
    },
    image:{
        borderTopRightRadius:"10px",
        borderTopLeftRadius:"10px",
        width: "100%",
        height: "200px",
        marginRight: "20px"
    },

    infoleft:{
        margin: "10px",
        textAlign: "left"
    },
    inforight:{
        margin: "10px",
        textAlign:"right"
    }
}
class Mountain extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={styles.root}>
                <div style={styles.card}>
                    <img style={styles.image} src={this.props.img}></img>
                    <div style={this.props.language == 'heb'? styles.inforight :styles.infoleft}>
                        <h1 style={styles.h1}>{this.props.name || "Mount"}</h1>
                        <p>{this.props.interface.height}:{this.props.height || 0}</p>
                        <p>{this.props.interface.region}:{this.props.region || "Israel"}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
class App extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
    }
    state = {
        language: 'eng'
    }

    langEng = () => this.setState({language: 'eng'});
    langHeb = () => this.setState({language: 'heb'});
    langRus = () => this.setState({language: 'rus'});

    render(){
        const language = this.state.language;
        return(
            <>
                <button style={styles.button} onClick={this.langEng}>English</button>
                <button style={styles.button} onClick={this.langHeb}>Hebrew</button>
                <button style={styles.button} onClick={this.langRus}>Russian</button>

                <div style={styles.root}>
                    {this.props.data[language].data.map(item =>{
                        return(
                            <Mountain
                                key={item.id}
                                name={item.name}
                                height={item.height}
                                img={item.src}
                                region={item.area}
                                interface={this.props.data[language].language}
                                language={language}
                            />
                        )
                    })}

                </div>
            </>
        )
    }

}

ReactDOM.render(

    <App
        data={LangMap}
    />,
    document.getElementById("root")

);
