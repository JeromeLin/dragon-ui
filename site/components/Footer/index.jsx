import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="group">
          <h2>
            <FormattedMessage id="app.home.footer.resources" />
          </h2>
          <ul>
            <li>
              <a href="https://zarm.design" rel="noopener noreferrer" target="_blank">
                Zarm
              </a>{' '}
              - Zarm of React
            </li>
            <li>
              <a
                href="https://ZhongAnTech.github.io/zarm-vue/#/documents/quick-start"
                rel="noopener noreferrer"
                target="_blank"
              >
                Zarm Vue
              </a>{' '}
              - Zarm of Vue
            </li>
            <li>
              <a href="https://zarm.design/#/design/download">
                <FormattedMessage id="app.home.resources" />
              </a>
            </li>
          </ul>
        </div>
        <div className="group">
          <h2>
            <FormattedMessage id="app.home.footer.community" />
          </h2>
          <ul>
            <li>
              <a
                href="https://zhuanlan.zhihu.com/c_135293309"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="app.home.footer.community.zhihu" />
              </a>
            </li>
            <li>
              <a
                href="https://app.mokahr.com/apply/zhongan/320"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="app.home.footer.community.joinus" />
              </a>
            </li>
          </ul>
        </div>
        <div className="group">
          <h2>
            <FormattedMessage id="app.home.footer.help" />
          </h2>
          <ul>
            <li>
              <a
                href="https://github.com/JeromeLin/zarm-web"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a href="/#/components/change-log">
                <FormattedMessage id="app.home.footer.help.changelog" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JeromeLin/zarm-web/issues/new"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="app.home.footer.help.bug-report" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JeromeLin/zarm-web/issues"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="app.home.footer.help.bug-list" />
              </a>
            </li>
            <li>
              <a
                href="https://gitter.im/ZhonganTech/zarm-web"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="app.home.footer.help.chat" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
