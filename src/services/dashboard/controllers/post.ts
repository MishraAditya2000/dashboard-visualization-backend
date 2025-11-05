
import * as fs from 'fs';
import path, { parse } from 'path';

import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiResponse } from '../../../utils/apiResponse.js';

export const uploadJsonData=asyncHandler(async(req,res)=>{
  const rootPath=process.cwd()
  const filePath=path.join(rootPath,"jsondata.json")
  const data=fs.readFileSync(filePath,'utf8');
  
  const parsedData=JSON.parse(data);
  console.log(parsedData.length)

  return res.status(200).json(new ApiResponse("",200,"API Call Successful",parsedData))
  const jsonData= fs.readFileSync('')
})