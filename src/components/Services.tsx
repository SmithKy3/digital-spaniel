import * as React from 'react';
import styled from 'styled-components';
import 'Styles/services.less';

export const Services: React.FC<{}> = () => {
  return (
    <section id="services">
      <div id="capabilities-wrapper">
        <div className="flex-half-screen">
          <div id="capabilities-bio">
            <h2>
              <span>What are</span>
              <br />
              we capable of
            </h2>

            <p>
              By focusing on design as an enabler and putting a huge emphasis on
              our clients as co-producers, we create innovative, sustainable
              marketing that enhances brand experience and user engagement.
            </p>

            <button>
              <p>Our process</p>
            </button>
          </div>
        </div>

        <div className="flex-half-screen">
          <table id="services-table">
            <tbody>
              <tr>
                <th>BRAND</th>
                <th>MARKETING</th>
              </tr>
              <tr>
                <td>Brand Strategy</td>
                <td>Digital</td>
              </tr>
              <tr>
                <td>Logo & Name</td>
                <td>Market Research</td>
              </tr>
              <tr>
                <td colSpan={2}>Identity & Collateral</td>
              </tr>
              <tr>
                <th>DEVELOPMENT</th>
              </tr>
              <tr>
                <td>eCommerce</td>
              </tr>
              <tr>
                <td>Web Development</td>
              </tr>
              <tr>
                <td>Mobile Apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
