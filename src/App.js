import "./App.css";
import AppRouter from "./config/router";

function App() {
  let data = [
    {
      status: "ok",
      totalResults: 11,
      articles: [
        {
          source: { id: null, name: "Zoom" },
          author: "Ashima Sharda Mahindra",
          title:
            "Omicron BF.7 in India; experts advice extreme caution as there is a possibility of a fresh wave in Diwali - Times Now",
          description:
            "With Diwali just around the corner, experts fear that the new covid variant might just trigger a new wave of the deadly infection, even as the first case of BF.7 has been reported in Gujarat.",
          url: "https://www.timesnownews.com/health/omicron-bf-7-in-india-experts-advice-extreme-caution-as-there-is-a-possibility-of-a-fresh-wave-in-diwali-article-94928569",
          urlToImage:
            "'100%'https://static.tnn.in/thumb/msid-94928569,imgsize-100,width-1280,height-720,resizemode-75/94928569.jpg",
          publishedAt: "2022-10-18T01:30:33Z",
          content:
            "It's very stressful, unhappy world today, says EAM S Jaishankar with a piece of advice for 'richer nations'",
        },
        {
          source: { id: null, name: "DNA India" },
          author: "DNA Web Team",
          title:
            "Flipkart Big Diwali Sale 2022 from October 19: Check expected offers on iPhone 13 and more here - DNA India",
          description:
            "Flipkart Big Diwali Sale 2022 will give a 10% immediate discount on State Bank of India (SBI) payments and EMIs starting October 19.",
          url: "https://www.dnaindia.com/technology/report-flipkart-big-diwali-sale-2022-from-october-19-check-expected-offers-on-iphone-13-and-more-here-2993642",
          urlToImage:
            "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/10/18/2547104-teaser-page-of-flipkart-s-big-diwali-sale.jpg",
          publishedAt: "2022-10-18T00:28:44Z",
          content:
            "Reported By:| Edited By: DNA Web Team |Source: DNA Web Desk |Updated: Oct 18, 2022, 05:58 AM ISTThe festival of lights known as Diwali is drawing near, and the well-known e-commerce company known as … [+1735 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "ET Bureau",
          title:
            "Fight against inflation will be prolonged and dogged, says RBI - Economic Times",
          description:
            "The Reserve Bank of India in its October Bulletin noted that Indias fight against ‘stubborn retail inflation will be dogged and prolonged, given the long and variable lags with which monetary policy operates and that it is fraught with uncertainties. However,…",
          url: "https://economictimes.indiatimes.com/news/economy/indicators/fight-against-inflation-will-be-prolonged-and-dogged-says-rbi/articleshow/94919285.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-94919516,width-1070,height-580,imgsize-88010,overlay-economictimes/photo.jpg",
          publishedAt: "2022-10-18T00:17:00Z",
          content:
            "Mumbai: The central banks goal of reducing inflation to 4% would be a two-stage process, although repeated shocks are making the journey to the milestone harder, an assessment on the state of the eco… [+2341 chars]",
        },
        {
          source: { id: null, name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title:
            "Roger Binny: The 'good guy' to head the world's richest cricket board - BBC",
          description:
            "The soft-spoken former India all-rounder's decisions at the top will shape cricket globally.",
          url: "https://www.bbc.com/news/world-asia-india-63274980",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/B42F/production/_127172164_w915518373.jpg",
          publishedAt: "2022-10-18T00:07:35Z",
          content:
            "Roger Michael Humphrey Binny - many friends like to call him by his full name - is one of the good guys. \r\nHis most likely elevation as president of the Board of Control for Cricket in India (BCCI) i… [+4824 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "Dheeraj Tiwari",
          title:
            "Govt may infuse ₹5,000 cr in state-run general insurers - Economic Times",
          description:
            "This planned equity support is over and above the ₹5,000 crore already infused this year in National Insurance (₹3,700 crore), Oriental Insurance (₹ 1,200 crore) and United India Insurance (₹100 crore).",
          url: "https://economictimes.indiatimes.com/news/economy/policy/govt-may-infuse-5000-cr-in-state-run-general-insurers/articleshow/94927711.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-94927729,width-1070,height-580,imgsize-702928,overlay-economictimes/photo.jpg",
          publishedAt: "2022-10-17T23:10:00Z",
          content:
            "The government may infuse about 5,000 crore equity into state-run general insurers to help them achieve solvency requirements as they meet an inflated wage bill, said two executives aware of the matt… [+2469 chars]",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Avinash Nair",
          title:
            "Gujarat firms sign MoU with Election Commission, to name, shame workers who don't vote - The Indian Express",
          description:
            "The MoUs have been signed with individual units as well as industry bodies, and the attempt to get more on board will continue till polling day. Assembly elections are due in the state later this year.",
          url: "https://indianexpress.com/article/cities/ahmedabad/gujarat-firms-sign-mou-with-election-commission-to-name-shame-workers-who-dont-vote-8214689/",
          urlToImage:
            "https://images.indianexpress.com/2022/10/ECI-PTI-1-2.jpg",
          publishedAt: "2022-10-17T23:05:58Z",
          content:
            "FOR THE first time, over 1,000 corporate houses in Gujarat have signed agreements with the Election Commission (EC), undertaking to monitor electoral participation of their workforce and publish the … [+4416 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "\"If You're Not Seeing Growth, Switch To Survival Mindset\": Suniel Shetty On Byju's Layoffs - NDTV",
          description:
            "Suniel Shetty said that India's population and its aspirations still present good businesses with a huge opportunity to continue their growth.",
          url: "https://www.ndtv.com/india-news/suniel-shetty-if-youre-not-seeing-growth-switch-to-survival-mindset-suniel-shetty-on-byjus-layoffs-3440068",
          urlToImage:
            "https://c.ndtvimg.com/2022-08/vfqqljl8_suniel-shetty_625x300_26_August_22.jpg",
          publishedAt: "2022-10-17T16:39:00Z",
          content:
            'Suniel Shetty said that he continues to believe in the "India story".\r\nSuniel Shetty, a film actor, producer, and businessman, has voiced his opinion over Edtech giant Byju\'s decision to lay off 2,50… [+2675 chars]',
        },
        {
          source: { id: null, name: "OpIndia" },
          author: "OpIndia Staff",
          title:
            "Netizens call out the hypocrisy of Shibani Dandekar and Richa Chadha over paid promotions for Bulgari mangalsutra: Details - OpIndia",
          description:
            "Shibani Dandekar and Richa Chadha had shared their pictures on Instagram sporting a 'mangalsutra' by Italian brand Bulgari. | OpIndia News",
          url: "https://www.opindia.com/2022/10/netizens-call-out-hypocrisy-of-shibani-dandekar-and-richa-chadha-over-paid-promotions-for-bulgari-mangalsutra-details/",
          urlToImage:
            "https://www.opindia.com/wp-content/uploads/2022/10/Shibani-Dandekar_Rich-Chadda.jpg",
          publishedAt: "2022-10-17T15:48:35Z",
          content:
            "Shibani Dandekar, TV presenter and wife of Farhan Akhtar, took to her Instagram handle to post a picture of herself sporting a ‘mangalsutra’ on the occasion of Karwa Chauth by the designer brand Bulg… [+4580 chars]",
        },
        {
          source: { id: null, name: "Businessworld.in" },
          author: null,
          title:
            "FOGSI Calls For HPV Vaccination To Be Included In National Programs - BW Healthcareworld",
          description:
            "News and Updates for Healthcare in India - , Healthcare Service Providers-FOGSI organizes Expert Group Meeting at AIIMS for ‘Cervical Cancer Mukt Bharat’",
          url: "http://bwhealthcareworld.businessworld.in/article/FOGSI-Calls-For-HPV-Vaccination-To-Be-Included-In-National-Programs/18-10-2022-450847",
          urlToImage:
            "http://static.businessworld.in/article/article_large_image/1581054067_nEQLGb_HPV_causing_cervical_cancer.jpg",
          publishedAt: "2022-10-17T14:24:13Z",
          content:
            "The Federation of Obstetric and Gynaecological Societies of India (FOGSI) has asked the government of India of India to include the HPV vaccine in the National Program to reduce the burden of cervica… [+2730 chars]",
        },
        {
          source: { id: null, name: "India TV News" },
          author: "Written by Parina Taneja",
          title:
            "BTS military service will cost HYBE? Korean music company clarifies and addresses concerns - India TV News",
          description:
            "BTS military service: BTS, containing Jin, RM, Suga, J-Hope, Jimin, V aka Kim Taehyung and Jungkook. which debuted in 2013, is currently on a break as a unit with each of the members pursuing solo projects. They had announced their hiatus in June this year.",
          url: "https://www.indiatvnews.com/entertainment/news/bts-military-service-will-cost-hyb-ceo-korean-music-company-clarifies-drop-in-share-investment-latest-news-2022-10-17-816918",
          urlToImage:
            "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/10/bts-duty-1666008305.jpg",
          publishedAt: "2022-10-17T12:23:37Z",
          content:
            "BTS members are all set to serve in the military, starting with the oldest member Jin initiating the process by the month's end. The news has come as a shock to the fans as they were still hopeful th… [+2753 chars]",
        },
        {
          source: { id: null, name: "Moneycontrol" },
          author: "Moneycontrol News",
          title:
            "Moto E22s budget smartphone launched in India with MediaTek G37 SoC, 90Hz Display, 5,000 mAh Battery - Moneycontrol",
          description:
            "The Moto E22s price in India is set at Rs 8,999 in India for the sole 4GB/64GB model.",
          url: "https://www.moneycontrol.com/news/technology/moto-e22s-budget-smartphone-launched-in-india-with-mediatek-g37-soc-90hz-display-5000-mah-battery-9341771.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2022/10/moto-e22s-770x433.jpg",
          publishedAt: "2022-10-17T07:40:30Z",
          content:
            "Motorola has officially unveiled a new budget smartphone in India. The Moto E22s is the latest in the companys E-series to make its way to the Indian market and brings a 90Hz display, a MediaTek chip… [+1150 chars]",
        },
      ],
    },
  ];
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
