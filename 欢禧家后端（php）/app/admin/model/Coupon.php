<?php
  

namespace app\admin\model;

use think\Model;

class Coupon extends Model
{
    protected $autoWriteTimestamp = true;

    public function getBeginTimeAttr($value)
    {
        if($value > 0) return date('Y-m-d H:i:s',$value);
        return '';
    }

    public function getEndTimeAttr($value)
    {
        if($value > 0) return date('Y-m-d H:i:s',$value);
        return '';
    }

    public function getCreateTimeAttr($value)
    {
        if($value > 0) return date('Y-m-d H:i:s',$value);
        return '';
    }
}