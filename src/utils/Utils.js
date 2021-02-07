
function shortText(_text, max_length)
{
	if (!_text)
		return null;

	if (_text.length > max_length)
		return _text.substring(0, max_length) + "...";
	else
		return _text;
}

function determineDevice(_class, width = 400)
{

	if (window.innerWidth <= width && _class.state.device !== "mobile")	
	{
		_class.setState({
			device: "mobile"
		});

	}
	else if (window.innerWidth > width && _class.state.device === "mobile")
	{
		_class.setState({
			device: "pc"
		});
	}

	if (window.innerWidth <= width)
		return true;
	else
		return false;
}

export {determineDevice, shortText}
