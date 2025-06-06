<?php
  

namespace app\admin\model;

use think\Model;

class User extends Model
{
    protected $autoWriteTimestamp = true;

    public function parent()
    {
        return $this->belongsTo('User', 'daren_id');
    }
    public function getAvatarAttr($val)
    {
        return getImageUrlArr($val,'avatar');
    }

    public function getSrcAttr($val)
    {
        return getImageUrlArr($val,'avatar');
    }

    public function getUserAvatarAttr($val)
    {
        return getImageUrlArr($val,'avatar');
    }
}