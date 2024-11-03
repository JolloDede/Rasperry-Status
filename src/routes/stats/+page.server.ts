import { getSystemDetails } from "$lib/system";

export async function load({ params }) {
    const systemInfo = await getSystemDetails();

    let hostInfo = [
		['Hostname', systemInfo.os.hostname()],
		['Platform', systemInfo.os.platform()],
		['Architecture', systemInfo.os.arch()],
        ['CPU Temperature', systemInfo.cpuTemp.toFixed(1)+"°C"]
	];

    let now = new Date();

    return ({
        hostInfo: hostInfo,
        cpuUsage: systemInfo.cpuUsage,
        memoryUsage: systemInfo.memoryUsage,
        time: now
    });
}