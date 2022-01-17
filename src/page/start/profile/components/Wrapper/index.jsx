import './styles.css';

import ArrowDownButton from "../../../../../components/Button/ArrowDownButton.components";
import ArrowUpButton from "../../../../../components/Button/ArrowUpButton.components";
import RoundedButton from "../../../../../components/Button/Rounded.components";
import CreateProfileIndicator from '../../../components/indicator.components';
import { useContext, useEffect, useState } from 'react';
import CreateProfileContext from '../../../context/profile.context';
import { useHistory } from 'react-router-dom';
import { buildQueryString, getQuery } from '../../../../../utils/query';
import { checkoutProfileRoute } from '../../../../../commons/route';

const CreateProfileBodyWrapper = ({children}) => {

    const history = useHistory();
    const { step, updateStep, stepList, setScrollDirection } = useContext(CreateProfileContext);
    const [ isEdit, setIsEdit ] = useState(false);

    useEffect(() => {
        let query = getQuery(history.location.search);
        if (query?.isEdit == true || query?.isEdit == 'true') {
            setIsEdit(true);
        }
    }, [])
    
    const indicatorOpts = [
        {value: 'basicInfo', label: 'Basic Info'},
        {value: 'datingPreference', label: 'Dating Preference'},
        {value: 'asset', label: 'Asset'},
        {value: 'completeRegistration', label: 'Complete Registration'},
    ];
   
    const nextStep = (e) => {
        e.preventDefault();
        setScrollDirection(true);
        let val = step;
        val++;
        updateStep(val);
    };

    const prevStep = (e) => {
        e.preventDefault();
        setScrollDirection(false);
        let val = step;
        val--;
        updateStep(val);
    };

    const handleCheckout = () => {
        let returnStep = getQuery(history.location.search).returnStep
        let query = {
            step: returnStep
        };

        history.push({
            pathname: checkoutProfileRoute,
            search: `?${buildQueryString(query)}`
        })
    }

    return (
        <div id='RD-createProfileRoot' className="relative" >
            <div 
                id='RD-createProfileBody'  
                className="h-100 w-full pt-64 pl-10 pr-10 bg-theme-bg-dark" 
            >
                <div className="relative m-auto w-4/5">
                    {children}

                </div>
            </div>
            <div 
                id='RD-createProfileFooterRoot'
                className='fixed w-full bottom-0'
            >
                <div
                    id='RD-createProfileFooterBody'
                    className="relative m-auto w-4/5"
                >
                    <div className="absolute -top-32">
                        <div className='inline-flex'>
                            { !isEdit && <div className={`pr-2 pl-2`}>
                                <ArrowUpButton 
                                    onClick={prevStep} 
                                    disabled={step==0} 
                                />
                            </div>}
                            { !isEdit && <div className='pr-2 pl-2'>
                                <ArrowDownButton 
                                    onClick={nextStep} 
                                    disabled={step>=stepList.length}
                                />
                            </div>}
                            { isEdit && <div className='pr-2 pl-2'>
                                <RoundedButton 
                                    onClick={handleCheckout}
                                >
                                    Back
                                </RoundedButton>
                            </div>}

                        </div>
                    </div>
                    <CreateProfileIndicator 
                        step={step}
                        stepList={stepList}
                        indicatorOpts={indicatorOpts}
                    />
                </div>
            </div>
        </div>
    )
};

export default CreateProfileBodyWrapper;