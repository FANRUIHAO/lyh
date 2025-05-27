<?php
  

namespace app\admin\model;

use think\Model;

class Medal extends Model
{
    protected $autoWriteTimestamp = true;

    public function getImageAttr($val)
    {
        return getImageUrlArr($val);
    }
}