export default function getConfigs(): {
    server: {
        name: string;
        port: string | number;
        baseURl: string;
        serverId: string;
        appBaseUrl: string;
        adminBaseUrl: string;
    };
    database: {
        url: string;
    };
};
