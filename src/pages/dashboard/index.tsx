import { t } from '@/utils/i18n';
import { InfoCircleOutlined, CaretUpOutlined, DashOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Col, Divider, Dropdown, Row, Select, Tooltip } from 'antd';

import DemoTinyArea from './tiny-area';
import DemoTinyColumn from './tiny-column';
import DemoColumn from './column';
import DemoTinyLine from './tiny-line';

import './index.css'

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xl={24} xxl={8} className='w-[100%]'>
          <div className='dark:bg-[rgb(33,41,70)] w-[100%] bg-[rgb(94,53,177)] overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border'>
            <div className='absolute top-[24px] right-[24px] z-10'>
              <Tooltip title={t("yAdJryjx" /* 指标说明 */)}>
                <InfoCircleOutlined className='text-[rgb(179,157,219)] text-[20px]' />
              </Tooltip>
            </div>
            <div className="text-[rgba(229,224,216,0.45)] text-[16px]">
              {t("nKMAkrqJ" /* 总销售额 */)}
            </div>
            <div className="text-white text-2xl mt-[28px] text-[30px]">
              ¥ 126,560
            </div>
            <div className='mt-[50px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]'>
              <div className='flex items-center'>
                <span>{t("NpRFMJyD" /* 周同比 */)}</span>
                <span className='ml-[12px]'>12%</span>
                <CaretDownOutlined className='ml-[6px] text-red-500' />
              </div>
              <div className='flex items-center'>
                <span>{t("WOQnwYUS" /* 日同比 */)}</span>
                <span className='ml-[12px]'>12%</span>
                <CaretUpOutlined className='ml-[6px] text-green-500' />
              </div>
            </div>
            <Divider className='dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]' />
            <div className='text-[rgba(229,224,216,0.85)] text-[16px]'>
              <span>
                {t("ZPCQOWAn" /* 日销售额 */)}
              </span>
              <span className='ml-[8px]'>
                ￥12,423
              </span>
            </div>
          </div>
        </Col>
        <Col xl={24} xxl={8} className='w-[100%]'>
          <div className='dark:bg-[rgb(33,41,70)] bg-[rgb(30,136,229)] theme1 overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border'>
            <div className='absolute top-[24px] right-[24px] z-10'>
              <Tooltip title={t("iLyPEqwQ" /* 指标说明 */)}>
                <InfoCircleOutlined className='text-[rgb(179,157,219)] text-[20px]' />
              </Tooltip>
            </div>
            <div className="text-[rgba(229,224,216,0.45)] text-[16px]">
              {t("ftuxZMpL" /* 访问量 */)}
            </div>
            <div className="text-white text-2xl mt-[20px] text-[30px]">
              8,930
            </div>
            <div className='mt-[20px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]'>
              <DemoTinyLine />
            </div>
            <Divider className='dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]' />
            <div className='text-[rgba(229,224,216,0.85)] text-[16px]'>
              <span>
                {t("sehypRaO" /* 日访问量 */)}
              </span>
              <span className='ml-[8px]'>
                9,431
              </span>
            </div>
          </div>
        </Col>
        <Col xl={24} xxl={8} className='w-[100%]'>
          <div className='dark:bg-[rgb(33,41,70)] bg-[rgb(94,53,177)] theme2 overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border'>
            <div className='absolute top-[24px] right-[24px] z-10'>
              <Tooltip title={t("sdOusITo" /* 指标说明 */)}>
                <InfoCircleOutlined className='text-[rgb(179,157,219)] text-[20px]' />
              </Tooltip>
            </div>
            <div className="text-[rgba(229,224,216,0.45)] text-[16px]">
              {t("PIYkoguj" /* 支付笔数 */)}
            </div>
            <div className="text-white text-2xl mt-[20px] text-[30px]">
              8,943
            </div>
            <div className='mt-[12px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]'>
              <DemoTinyColumn />
            </div>
            <Divider className='dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]' />
            <div className='text-[rgba(229,224,216,0.85)] text-[16px]'>
              <span>
                {t("BUjwpMzX" /* 转化率 */)}
              </span>
              <span className='ml-[8px]'>
                2,421
              </span>
            </div>
          </div>
        </Col>
        <Col className='w-[100%] box-border' xl={24} xxl={16} >
          <div className='dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative box-border'>
            <div className='flex justify-between items-center'>
              <div>
                <div className='text-[rgb(132,146,196)]'>{t("fHpiDHYH" /* 总增长 */)}</div>
                <div className='dark:text-white text-[rgb(18,25,38)] mt-[8px] text-[18px]'>￥12,423</div>
              </div>
              <Select
                options={[
                  {
                    label: t("yLkZTWbn" /* 今日 */),
                    value: 'today'
                  },
                  {
                    label: t("QFqMuZiD" /* 本月 */),
                    value: 'mouth'
                  },
                  {
                    label: t("lGOcGyrv" /* 本年 */),
                    value: 'year'
                  },
                ]}
                defaultValue="today"
                size="large"
                dropdownMatchSelectWidth={false}
                placement="bottomRight"
              />
            </div>
            <div className='mt-[50px] absolute bottom-[12px] w-[90%] box-border'>
              <DemoColumn />
            </div>
          </div>
        </Col>

      </Row>
    </div>
  )
}



export default Dashboard;