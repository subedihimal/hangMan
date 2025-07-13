function button({ text, onClickHandler, styleType = "primary"}) {
    return (
        <button 
            onClick = {onClickHandler}
            className = {`px-14 py-3 ${buttonColor(styleType)} text-white rounded-lg`}
        >
            {text}
        </button>
    );
}
function buttonColor(styleType){
    if(styleType === "primary"){
      return "bg-gray-500";
    }else if(styleType === "secondary"){
        return "bg-sky-500";
    }else{
        return "bg-red-500";
    }

}
export default button;