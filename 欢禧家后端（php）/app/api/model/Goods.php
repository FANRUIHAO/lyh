<?php
  

namespace app\api\model;

use think\Model;

class Goods extends Model
{
    protected $autoWriteTimestamp = true;

    public function getCreateTimeAttr($value)
    {
        return date('Y-m-d H:i:s',$value);
    }
}