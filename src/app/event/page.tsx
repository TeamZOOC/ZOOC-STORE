import React from 'react';
import EventArticle from './EventArticle';
import EventCoupon from './EventCoupon';
import EventProduct from './EventProduct';
import EventSample from './EventSample';
import EventFooter from './EventFooter';
import EventDate from './EventDate';

const page = () => (
  <>
    <EventArticle />
    <EventDate />
    <EventCoupon />
    <EventProduct />
    <EventSample />
    <EventFooter />
  </>
);

export default page;
