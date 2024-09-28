
// import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import Doctor from "./components/DoctorPage/Doctor";

// export default function CheckmarkDemo() {
    

//     return (
        
//     )
// }
        
// import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';

// export default function FilterDemo() {
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const countries = [
//         { name: 'Australia', code: 'AU' },
//         { name: 'Brazil', code: 'BR' },
//         { name: 'China', code: 'CN' },
//         { name: 'Egypt', code: 'EG' },
//         { name: 'France', code: 'FR' },
//         { name: 'Germany', code: 'DE' },
//         { name: 'India', code: 'IN' },
//         { name: 'Japan', code: 'JP' },
//         { name: 'Spain', code: 'ES' },
//         { name: 'United States', code: 'US' }
//     ];

//     const selectedCountryTemplate = (option, props) => {
//         if (option) {
//             return (
//                 <div className="flex align-items-center">
//                     <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
//                     <div>{option.name}</div>
//                 </div>
//             );
//         }

//         return <span>{props.placeholder}</span>;
//     };

//     const countryOptionTemplate = (option) => {
//         return (
//             <div className="flex align-items-center">
//                 <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
//                 <div>{option.name}</div>
//             </div>
//         );
//     };

//     return (
//         <div className="card flex justify-content-center">
//             <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
//                 filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
//         </div>    
//     )
// }
        

// import React, { useState, useEffect } from 'react';
// import { Galleria } from 'primereact/galleria';
// import { PhotoService } from './service/PhotoService';

// export default function CaptionDemo() {
//     const [images, setImages] = useState(null);
//     const responsiveOptions = [
//         {
//             breakpoint: '991px',
//             numVisible: 4
//         },
//         {
//             breakpoint: '767px',
//             numVisible: 3
//         },
//         {
//             breakpoint: '575px',
//             numVisible: 1
//         }
//     ];

//     useEffect(() => {
//         PhotoService.getImages().then(data => setImages(data));
//     }, []);

//     const itemTemplate = (item) => {
//         return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
//     }

//     const thumbnailTemplate = (item) => {
//         return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
//     }

//     const caption = (item) => {
//         return (
//             <React.Fragment>
//                 <div className="text-xl mb-2 font-bold">{item.title}</div>
//                 <p className="text-white">{item.alt}</p>
//             </React.Fragment>
//         );
//     }

//     return (
//         <div className="card">
//             <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
//                 item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
//         </div>
//     )
// }
        

import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
// import { PhotoService } from './service/PhotoService';
import './GalleriaAdvancedDemo.css';

export default function AdvancedDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [isAutoPlayActive, setAutoPlayActive] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    
    const galleria = useRef(null)

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]);

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

    const onItemChange = (event) => {
        setActiveIndex(event.index)
    }

    const toggleFullScreen = () => {
        if (isFullScreen) {
            closeFullScreen();
        }
        else {
            openFullScreen();
        }
    }

    const onFullScreenChange = () => {
        setFullScreen(prevState => !prevState )
    }

    const openFullScreen = () => {
        let elem = document.querySelector('.custom-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    const bindDocumentListeners = () => {
        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("msfullscreenchange", onFullScreenChange);
    }

    const unbindDocumentListeners = () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
        document.removeEventListener("msfullscreenchange", onFullScreenChange);
    }

    const thumbnailTemplate = (item) => {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const renderFooter = () => {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !isAutoPlayActive,
            'pi-pause': isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !isFullScreen,
            'pi-window-minimize': isFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => setShowThumbnails(prevState => !prevState)} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!isAutoPlayActive) {
                        galleria.current.startSlideShow();
                        setAutoPlayActive(true)
                    }
                    else {
                        galleria.current.stopSlideShow();
                        setAutoPlayActive(false)
                    }
                }} />
                {
                    images && (
                        <span className="title-container">
                            <span>{activeIndex + 1}/{images.length}</span>
                            <span className="title">{images[activeIndex].title}</span>
                            <span>{images[activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    }

    const footer = renderFooter();
    const galleriaClassName = classNames('custom-galleria', {
        'fullscreen': isFullScreen
    });

    return (
        <div className="card galleria-demo">
            <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                style={{ maxWidth: '640px' }} className={galleriaClassName} />
        </div>
    )
}
        