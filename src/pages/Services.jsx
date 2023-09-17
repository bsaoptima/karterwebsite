import React, { useState, useRef } from "react";
import { ArrowDownCircle } from "feather-icons-react";
import minds from '../assets/minds.svg'
import Web from '../assets/Web.svg'
import "./Services.css"
import pandas from '../assets/pandas.svg'


export default function ServicesPage(){

    const servicesRef = useRef();
    const scrollToServices = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative scroll-smooth">
            <LandingItem scrollToServices={scrollToServices}/>
            <StudentAreGreatItem />
            <ServicesItem servicesRef={servicesRef} />
        </div>
    )
}

function LandingItem({ scrollToServices }){
    return (
        <div className="bg-[#F6F9FC] flex flex-col justify-center items-center px-8 py-10 lg:py-20 gap-y-5">
            <p className="text-lg lg:text-xl text-center font-alliance font-semibold text-[#00A6B2]">Digital Services for Innovative Startups</p>
            <p className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">Areas of expertise</p>
            <p className="text-[#656B8A] text-center text-lg md:text-xl md:px-40 lg:px-60 xl:px-96 font-alliance">Thanks to our network, we have a large coverage in services offered. Leverage all this talent to build your products.</p>
            <button onClick={scrollToServices}>
                <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] mt-5 drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                    <p className="font-alliance">Check our Services</p>
                    <ArrowDownCircle />
                </div>
            </button>
        </div>
    )
}

function StudentAreGreatItem(){
    return(
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-2 bg-[#F6F9FC] justify-between items-center px-8 py-10 md:px-20">
            <div className="flex flex-col gap-y-5 basis-1/2 md:px-10">
                <p className="text-4xl lg:text-5xl text-start font-sfprodisplay font-bold text-[#29363D]">Young, brilliant minds</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Our trained and vetted student developers are at the forefront of technical innovation.</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Get access to the latest frameworks, technologies and trends. This allows us to build innovative and reliable products fast.</p>
            </div>
            <div className="flex flex-col justify-center items-center basis-1/2">
                <img src={minds} className="rounded" alt="Team Image" height={450} width={450}/>
            </div>
        </div>
    )
}

function ServicesItem({servicesRef}){
    const [openTab, setOpenTab] = useState(1);

    return (
        <div ref={servicesRef} className="flex flex-wrap flex-col justify-center items-center bg-[#F6F9FC] px-5 md:px-20 md:py-14">
            <p className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">Our Services</p>
            <div className="service-choices py-10 md:top-36">
                <div className="flex flex-row gap-x-2 justify-center items-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-8 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                            ? "text-white bg-black border-[3px] border-black"
                            : "text-black bg-white border-[3px] border-black")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                    Software
                    </a>

                    <a
                        className={
                        "text-xs font-bold uppercase px-12 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                            ? "text-white bg-black border-[3px] border-black"
                            : "text-black bg-white border-[3px] border-black")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        Data
                    </a>

                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                            ? "text-white bg-black border-[3px] border-black"
                            : "text-black bg-white border-[3px] border-black")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                    >
                        Automations
                    </a>
                </div>
            </div>
            <div className="flex flex-col">
                    <div className="flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <SoftwareComponentV2 />
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <DataComponent />
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <AutomationsComponent />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

function SoftwareComponentV2(){
    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start py-10">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">Web Development</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">Build an online presence for your business and launch Web MVPs.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Static Website</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Create a website for your company.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/windows/32/wix.png" alt="wix"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/wordpress.png" alt="wordpress"/>
                            <img width="25" height="25" src="https://img.icons8.com/windows/32/squarespace.png" alt="squarespace"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/000000/webflow.png" alt="webflow"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Web Application</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Build your SaaS MVP with Karter.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services"/>
                            <img width="25" height="25" src="https://img.icons8.com/fluency/48/azure-1.png" alt="azure-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Ecommerce</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Sell products and create an online presence.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/shopify.png" alt="shopify"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/woocommerce.png" alt="woocommerce"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/paypal.png" alt="paypal"/>
                            <img width="25" height="25" src="https://img.icons8.com/windows/32/squarespace.png" alt="squarespace"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/stripe.png" alt="stripe"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Website Wireframe</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Sketch and design your website.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">Mobile Applications</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">We build scalable mobile apps with innovative and up-to-date technologies.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Mobile Wireframe</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Sketch and design your mobile application.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Mobile Application</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Build the MVP of your mobile app.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/flutter.png" alt="flutter"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/swift.png" alt="swift"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/android-os.png" alt="android-os"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start py-10">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">Custom Software</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">If you are in need of more tailored software solutions, you came to the right place.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Internal Tool</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Build a custom tool solving a business problem.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/c-sharp-logo.png" alt="c-sharp-logo"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">App Improvement</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Update your app and add the features you want.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/c-sharp-logo.png" alt="c-sharp-logo"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/flutter.png" alt="flutter"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">ChatBot</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Power your applications with a custom ChatBot for your audience.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/chatgpt.png" alt="chatgpt"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}


function DataComponent(){
    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start py-10">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">Data Intelligence</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">Leverage the power of data to reach your highest business potential.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Business Dashboard</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Visualize all your data and understand your business's health.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/power-bi.png" alt="power-bi"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/tableau-software.png" alt="tableau-software"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" alt="microsoft-excel-2019--v1"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Data Analytics</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Analyse and get insights from datasets for better business decisions.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/numpy.png" alt="numpy"/>
                            <img width="15" height="20" src={pandas} alt="pandas"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/hadoop-distributed-file-system.png" alt="hadoop-distributed-file-system"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Web Benchmarking</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Compare the performance of your website w/ competition.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/google-analytics.png" alt="google-analytics"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/shopify.png" alt="shopify"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/wordpress.png" alt="wordpress"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/webflow.png" alt="webflow"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">Data Engineering</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">We build strong, reliable systems to help you create and gather data autonomously.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Database Setup</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Implement the right database infrastructure for your business.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/>
                            <img width="23" height="25" src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png" alt="mongodb"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/redis.png" alt="redis"/>
                            <img width="20" height="20" src="https://seeklogo.com/images/P/pinecone-icon-logo-AF8B5B7F96-seeklogo.com.png" alt="redis"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/my-sql.png" alt="my-sql"/>
                            
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Data Pipeline</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Create pipelines to gather and store data for analysis.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://s3-symbol-logo.tradingview.com/snowflake--600.png" alt="snowflake"/>
                            <img width="23" height="25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/1200px-Apache_kafka-icon.svg.png" alt="mongodb"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/redis.png" alt="redis"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services"/>                          
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Datalake</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Build the perfect architecture for ML & DL models.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="snowflake"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/google-cloud.png" alt="google-cloud"/>
                            <img width="25" height="25" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/databricks_logo_icon_170295.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://s3-symbol-logo.tradingview.com/snowflake--600.png" alt="snowflake"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Power your Models</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Translate your math models in code and feed them data.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="snowflake"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/color/48/numpy.png" alt="numpy"/>
                            <img width="15" height="20" src={pandas} alt="pandas"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap flex-col gap-y-5 justify-center items-center md:justify-start md:items-start py-10">
                <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-semibold text-[#29363D]">AI & LLMs</p>
                <p className="text-[#37434a] text-center md:text-start text-lg md:text-xl font-alliance">Impletement powerful models and innovative features in your applications.</p>
                <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">ChatBot</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Power your applications with a ChatBot trained on YOUR data.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="25" height="25" src="https://www.mlq.ai/content/images/2023/06/Screenshot-2023-06-15-at-8.15.36-PM.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/chatgpt.png" alt="chatgpt"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-y-2 items-start rounded p-5 bg-white border-2 border-gray hover:border-[#F6F9FC]">
                        <p className="text-xl text-start font-alliance font-semibold text-[#29363D]">Private Company LLM</p>
                        <p className="text-[#37434a] text-start text-lg font-alliance">Create a secure query system for employees with your documents.</p>
                        <p className="text-start font-alliance font-semibold text-[#29363D] mt-2">Technology</p>
                        <div className="flex flex-wrap flex-row gap-x-2 gap-y-2">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                            <img width="30" height="20" src="https://seeklogo.com/images/C/chroma-logo-FB287847E7-seeklogo.com.png" alt="javascript--v1"/>
                            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/chatgpt.png" alt="chatgpt"/>
                            <img width="20" height="20" src="https://seeklogo.com/images/P/pinecone-icon-logo-AF8B5B7F96-seeklogo.com.png" alt="redis"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

function AutomationsComponent(){
    return (
        <div className="flex flex-wrap flex-col justify-center items-center py-10">
            <div className="flex flex-col justify center items-center gap-y-20">
                
                <div className="flex flex-row justify-center items-center md:gap-x-5 gap-y-5">
                    <div className="flex flex-col justify-start items-start gap-y-5 basis-1/2">
                        <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-bold text-[#29363D]">Web Development</p>
                        <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Websites, Web Applications, Figma, UI Designs make a cool text.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center basis-1/2">
                        WEB DEV IMAGE
                    </div>
                </div>
                
                <div className="flex flex-row justify-center items-center md:gap-x-5 gap-y-5">
                    <div className="flex flex-col justify-center items-center basis-1/2">
                        Mobile Apps IMAGE
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-5 basis-1/2">
                        <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-bold text-[#29363D]">Mobile Applications</p>
                        <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">make a cool text about why mobile applications are cool and edgy.</p>
                    </div>
                </div>
                
                <div className="flex flex-row justify-center items-center md:gap-x-5 gap-y-5">
                    <div className="flex flex-col justify-start items-start gap-y-5 basis-1/2">
                        <p className="text-3xl lg:text-4xl text-start font-sfprodisplay font-bold text-[#29363D]">Internal Tools</p>
                        <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Want something for your company but existing solutions do not exist, then we build it for you.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center basis-1/2">
                        WEB DEV IMAGE
                    </div>
                </div>
            
            </div>
        </div>
    )
}