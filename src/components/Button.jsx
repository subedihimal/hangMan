function button({ text, onClickHandler, styleType = "primary"}) {
    return (
        <button 
            onClick = {onClickHandler}
            className = {`px-4 py-2 ${buttonColor(styleType)} text-white`}

        >
            {text}
        </button>
    );
}
function buttonColor(styleType){
    if(styleType === "primary"){
        return "bg-sky-500/50";
    }else if(styleType === "secondary"){
      return "bg-gray-500/80";
    }else{
        return "bg-red-500/50";
    }

}
export default button;