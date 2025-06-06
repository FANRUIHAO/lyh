<?php
  

namespace app\api\model;

use think\Model;

class Score extends Model
{
    protected $name = 'user_score_log';
    protected $autoWriteTimestamp = true;

    public function getCreateTimeAttr($value)
    {
        return date('Y-m-d H:i:s',$value);
    }
}