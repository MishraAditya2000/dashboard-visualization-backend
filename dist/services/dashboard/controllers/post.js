import * as fs from 'fs';
import path from 'path';
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiResponse } from '../../../utils/apiResponse.js';
import { Dashboard } from '../../../db/schema/dashboard.js';
export const uploadJsonData = asyncHandler(async (req, res) => {
    const rootPath = process.cwd();
    const filePath = path.join(rootPath, "jsondata.json");
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    console.log(parsedData.length);
    const result = await Dashboard.insertMany(parsedData);
    if (result) {
        return res.status(200).json(new ApiResponse("", 200, "API Call Successful", result));
    }
    throw new Error("Unable to upload data to mongodb");
});
