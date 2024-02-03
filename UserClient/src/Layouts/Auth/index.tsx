import { Outlet} from "react-router-dom";
import { Box } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";

const AuthLayout = () => {
  
  return (
    <div>
      <NavigationProgress />
      <Box mt={60}>
        <Outlet />
      </Box>
    </div>
  );
};

export default AuthLayout;