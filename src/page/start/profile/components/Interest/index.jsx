import Typography from "../../../../../components/Typography";
import { useContext } from "react";
import CreateProfileContext from "../../../context/profile.context";
import ItemOptionList from "../../../../../components/ItemOptions";

const DatingInterest = (props) => {

    const { profile, updateProfile } = useContext(CreateProfileContext);

    const options = [
        { value: 'foodie', label: 'Foodie'},
        { value: 'walking', label: 'Walking'},
        { value: 'art', label: 'Art' },
        { value: 'language-exchage', label: 'Language Exchange' },
        { value: 'karaoke', label: 'Karaoke' },
        { value: 'tea', label: 'Tea' },
        { value: 'dog-lover', label: 'Dog lover' },
        { value: 'photography', label: 'Photography' },
        { value: 'diy', label: 'DIY' },
    ]

    /**
     * if value not exists in the array, insert one
     * if value already exists in the array, remove
     * 
     * @param {string} val 
     */
    const handleSelect = (val) => {
        let arr = [...profile.interest];
    
        if (!arr.includes(val)) {
            // perform insert
            arr = [...arr, val];
        } else {
            // perform remove
            let idx = arr.indexOf(val);
            arr.splice(idx, 1);
        };
        updateProfile({
            target: {
                name: 'interest',
                value: arr
            }
        });
        
    }
 
    return (
        <div id="RD-CreateProfile-height" className="RD-CreateProfileComponents">
            <Typography.Featured
                alignment='left'
            >
                Dating Preference
            </Typography.Featured>
            <div className="w-4/5">
                <div className="inline items-end">
                    <div className="pt-4 pb-2 pr-4 w-140">
                        <Typography.H2
                            alignment="left"
                        >
                            Your Interest
                        </Typography.H2>
                    </div>
                    <div className="mt-10 w-full">
                        <ItemOptionList 
                            value={profile.interest}
                            options={options}
                            handleSelect={handleSelect}
                            arrangment="flex"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default DatingInterest;