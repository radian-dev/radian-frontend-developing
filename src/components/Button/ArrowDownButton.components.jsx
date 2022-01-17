import ArrowDownIcon from "../Icons/arrowDown.components";


const ArrowDownButton = ({
    onClick,
    disabled=false
}) => {

    const handleClick = (e) => {
        e.preventDefault();
        if (disabled) return;
        onClick(e);
    };

    return (
        <div 
        className={`h-16 w-16 bg-theme-dark-blue rounded-full flex transition-all
            ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer opacity-100'}`
        }
        onClick={handleClick}
        >
            <ArrowDownIcon />
        </div>
    )
};

export default ArrowDownButton;