import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { t } from '@/utils/i18n';
const Result404 = () => (
  <Result
    status="404"
    title="404"
    subTitle={t("ngXMUXXl" /* 对不起，你访问的页面不存在。 */)}
    extra={(
      <Button type="primary">
        <Link to="/">{t("PidiCYkJ" /* 首页 */)}</Link>
      </Button>
    )}
  />
);

export default Result404;