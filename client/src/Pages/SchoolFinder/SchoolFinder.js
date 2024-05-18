import React, { useEffect } from 'react';

export const SchoolFinder = () => {
    useEffect(() => {
        const divElement = document.getElementById('viz1716061213364');
        const vizElement = divElement.getElementsByTagName('object')[0];

        if (divElement.offsetWidth > 800) {
            vizElement.style.width = '100%';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
        } else if (divElement.offsetWidth > 500) {
            vizElement.style.width = '100%';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
        } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '527px';
        }

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }, []);

    return (
        <div className="page">
            <h2>School Finder Search</h2>
            <p>A sample tableau integration</p>
            <div className='tableauPlaceholder' id='viz1716061213364' style={{ position: 'relative' }}>
                <noscript>
                    <a href='https://developer.salesforce.com/'>
                        <img alt='Profitability Overview' src='https://public.tableau.com/static/images/De/DeveloperSuperstore/Overview/1_rss.png' style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='DeveloperSuperstore/Overview' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='device' value='desktop' />
                    <param name='static_image' value='https://public.tableau.com/static/images/De/DeveloperSuperstore/Overview/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='apiInternalVersion' value='1.152.0' />
                    <param name='apiExternalVersion' value='3.9.0' />
                    <param name='filter' value='navType=0' />
                    <param name='filter' value='navSrc=Opt' />
                    <param name='disableUrlActionsPopups' value='n' />
                    <param name='filter' value='mobile=n' />
                    <param name='hideEditButton' value='n' />
                    <param name='hideEditInDesktopButton' value='n' />
                    <param name='suppressDefaultEditBehavior' value='n' />
                    <param name='jsdebug' value='n' />
                </object>
            </div>
        </div>
    );
};
