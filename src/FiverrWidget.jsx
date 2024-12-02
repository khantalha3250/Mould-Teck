import React, { useEffect } from 'react';

const FiverrWidget = () => {
  useEffect(() => {
    // Dynamically adding the script to ensure proper execution in React
    const script = document.createElement('script');
    script.src = 'https://widgets.fiverr.com/api/v1/seller/msktools?widget_id=93945e3f-76e2-4f43-9074-44d3e458ba37';
    script.async = true;
    script.defer = true;
    script.id = 'fiverr-seller-widget-script-93945e3f-76e2-4f43-9074-44d3e458ba37';
    script.setAttribute(
      'data-config',
      '{"category_name":"Graphics \u0026 Design"}'
    );
    document.body.appendChild(script);

    return () => {
      // Cleanup the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      itemscope
      itemType="http://schema.org/Person"
      className="fiverr-seller-widget"
      style={{ display: 'inline-block' }}
    >
      <a
        itemProp="url"
        href="https://www.fiverr.com/msktools"
        rel="nofollow"
        target="_blank"
        style={{ display: 'inline-block' }}
      >
        <div
          className="fiverr-seller-content"
          id="fiverr-seller-widget-content-93945e3f-76e2-4f43-9074-44d3e458ba37"
          itemProp="contentURL"
          style={{ display: 'none' }}
        ></div>
        <div id="fiverr-widget-seller-data" style={{ display: 'none' }}>
          <div itemProp="name">msktools</div>
          <div itemscope itemType="http://schema.org/Organization">
            <span itemProp="name">Fiverr</span>
          </div>
          <div itemProp="jobtitle">Seller</div>
          <div itemProp="description">
            M S K is a CAD and Product Design team of well-experienced experts.
            We use the latest software, integrate the latest technologies for
            all the product design and detailing, preparation of the
            manufacturing and assembly prototype. Our aim is to support Plants,
            Equipment, Fabrication, Machinery, and Industrial Products
            Manufacturers for Product Engineering, Value Engineering,
            Productivity Improvement, Cost Reduction, and Faster time to market
          </div>
        </div>
      </a>
    </div>
  );
};

export default FiverrWidget;
