<?php
  

namespace app\admin\model;

use think\Model;

class Report extends Model
{
    protected $autoWriteTimestamp = true;

    public function getImageAttr($val)
    {
        return getImageUrlArr($val);
    }

    public function faUser()
    {
        return $this->belongsTo('User', 'fa_user_id');
    }
    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}