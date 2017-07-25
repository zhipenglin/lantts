import React from 'react';
import banner from './banner.jpg';
import item_01 from './item-01.jpg';
import item_02 from './item-02.jpg';
import item_03 from './item-03.jpg';
import './style.css';

export default () => {
  return (
    <div className="page-index">
      <img className="page-index__banner" src={banner} alt="banner" />
      <div className="page-index__desc">
        <h1>江苏蓝天水净化工程有限公司天水分公司</h1>
        <p>环保水处理产品共分三大类</p>
        <p>一、给水部分</p>
        <p>主要产品有过滤器、反渗透、电渗析、EDI电除盐、离子交换器等用于供电、化工、冶金、轻工、医药、饮料行业的设备。</p>
        <p>二、排水部分</p>
        <p>主要产品有地埋式生活污水处理设备、沉淀池、陆用油水分离器、气浮设备、回用水设备等。</p>
        <p>三、循环水设备</p>
        <p>主要产品有玻璃钢冷却塔、游泳池循环水处理设备、全自动旁滤设备等。</p>
        <p>公司的其他产品：mbr膜，mbr污水处理，mbr膜生物反应器，mbr中水处理，mbr平片膜</p>
      </div>
      <div className="page-index__title">产品展示</div>
      <div className="page-index__product">
        <div className="page-index__item">
          <img src={item_01} alt="item_01" />
          <div className="page-index__text">
            <h2>污水处理一体化设备</h2>
            <p>
              3.14再生水装置由膜组件、反应池、污泥泵、抽吸泵、风机、电控柜、前端处理池、清水池、操作间等部分组成，结合了高效膜分离技术.......
            </p>
          </div>
        </div>
        <div className="page-index__item">
          <img src={item_02} alt="item_02" />
          <div className="page-index__text">
            <h2>地埋一体化水处理设备</h2>
            <p>
              处理污水量：0.5-200（m3/h）。可埋入地表以下，设备上部种植花木、草坪，也可设置在室内。对周围环境无影响、污泥产生量少、噪音小.......
            </p>
          </div>
        </div>
        <div className="page-index__item">
          <img src={item_03} alt="item_03" />
          <div className="page-index__text">
            <h2>PEIER膜元件</h2>
            <p>以性能分：有B版、H版和T版三种B版适用于生活污水、市政污水及类生活污水处理，H版适用于工业污水处理，T版适用于含油废水等</p>
          </div>
        </div>
      </div>
    </div>
  );
};
